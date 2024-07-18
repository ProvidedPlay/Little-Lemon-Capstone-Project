import { fireEvent, getAllByTestId, getByTestId, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingSection';
import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI } from './utilities/API';

const initialExpectedDates = fetchAPI(new Date());
const updatedExpectedDates = fetchAPI(new Date())

test('checks that reservation time select menu is present on the page', () => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );
    const reservationTimeSelectMenu = screen.getByTestId("reservationTimeSelect")
    expect(reservationTimeSelectMenu).toBeInTheDocument();
});

test('returns initial times', () => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );
    const reservationTimeSelectOptions = screen.getAllByTestId("reservationTimeSelectOption")
    initialExpectedDates.map((expectedDate, expectedDateIndex) => {expect(reservationTimeSelectOptions[expectedDateIndex].value).toBe(expectedDate.toString())})
});

test('returns updated times', async() => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingForm/>
            </AppContextProvider>
        </BrowserRouter>
    );



    const reservationDateSelectMenu = screen.getByTestId("reservationDateSelect")
    fireEvent.click(reservationDateSelectMenu)
    fireEvent.change(reservationDateSelectMenu, {target: {id: "option 2"}})
    const reservationTimeSelectOptions = await screen.getAllByTestId("reservationTimeSelectOption")
    updatedExpectedDates.map((expectedDate, expectedDateIndex) => {expect(reservationTimeSelectOptions[expectedDateIndex].value).toBe(expectedDate.toString())})
});
