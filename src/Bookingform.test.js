import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingSection';
import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI } from './utilities/API';
import userEvent from '@testing-library/user-event';
import getFutureDayMonth from './utilities/getFutureDayMonth';

const user = userEvent.setup()

const initialExpectedTimes = fetchAPI(new Date());

test('checks that initial reservation times populate on page load', () => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );
    const reservationTimeSelectOptions = screen.getAllByTestId("reservationTimeSelectOption")
    initialExpectedTimes.map((expectedTime, expectedTimeIndex) => {expect(reservationTimeSelectOptions[expectedTimeIndex].value).toBe(expectedTime.toString())})
});

test('checks that reservation times update when date is updated', async() => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );



    const reservationDateSelectMenu = screen.getByTestId("reservationDateSelect")
    await user.selectOptions(reservationDateSelectMenu, "1")

    const reservationTimeSelectOptions = screen.getAllByTestId("reservationTimeSelectOption")
    const tomorrowsExpectedTimes = fetchAPI(getFutureDayMonth(1)[1]);
    tomorrowsExpectedTimes.map((expectedTime, expectedTimeIndex) => {expect(reservationTimeSelectOptions[expectedTimeIndex].value).toBe(expectedTime.toString())})
});

test('will attempt to submit form without adding values to "required" fields; should identify input field as invalid', async() => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submitButton")
    const contactInfoTextField = screen.getByTestId("contactInfoTextField")

    expect(submitButton).toBeInTheDocument();
    expect(contactInfoTextField).toBeInTheDocument();

    await user.click(submitButton);
    expect(contactInfoTextField).toBeInvalid();
});

