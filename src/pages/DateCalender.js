import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';

const DateCalendar = () => {
  const today = new Date();
  const tenDaysAhead = new Date(today);
  tenDaysAhead.setDate(today.getDate() + 10);

  const datesToShow = [];

  // Generate dates for the next 10 days
  for (let i = 0; i < 11; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    datesToShow.push(date);
  }

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList>
          {datesToShow.map((date, index) => (
            <Tab key={index}>{formatDate(date)}</Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default DateCalendar;
