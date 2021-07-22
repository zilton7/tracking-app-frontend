import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MeasurementItem from '../../components/MeasurementItem';
import store from '../../store';

afterEach(cleanup);

it('displays MeasurementItem', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MeasurementItem
          id="005784"
          name="TestMeasurementItem"
          image="https://via.placeholder.com/150"
          key="005784"
        />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText('TestMeasurementItem')).toBeTruthy();
});
