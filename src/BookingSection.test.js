import { render, screen } from '@testing-library/react';
import BookingSection from './components/BookingSection';
import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';

test('renders booking section header', () => {
    render(
        <BrowserRouter>
            <AppContextProvider>
                <BookingSection/>
            </AppContextProvider>
        </BrowserRouter>
    );
    const headingElement = screen.getByText("FIND A TABLE");
    expect(headingElement).toBeInTheDocument();
});
