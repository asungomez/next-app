import { Button, Col, Form, Row, Select } from 'antd';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

import { Dates } from '../../utils/date';
import { EventsFilterSelect } from './events-filter-select';

type EventsFilterProps = {
  onSubmit: (year: number, month: number) => void;
  dates: Dates;
};

const formatMonth = (month: number) => {
  const dateObject = DateTime.fromObject({
    month,
  });
  return dateObject.toFormat('MMMM');
};

export const EventsFilter: React.FC<EventsFilterProps> = ({
  onSubmit,
  dates,
}) => {
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>();
  const [months, setMonths] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>();

  useEffect(() => {
    const years = Object.keys(dates).map(year => +year);
    if (years.length > 0) {
      setYears(years);
      const months = dates[years[0]];
      if (months.length > 0) {
        setMonths(months);
      }
    }
  }, []);

  const yearChangeHandler = (year: number) => {
    setSelectedYear(year);
    const months = dates[year];
    setMonths(months);
    if (!selectedMonth || !months.includes(selectedMonth)) {
      setSelectedMonth(months[0]);
    }
  };

  const monthChangeHandler = (month: number) => {
    setSelectedMonth(month);
  };

  const submitHander = () => {
    if (selectedYear && selectedMonth) {
      onSubmit(selectedYear, selectedMonth);
    }
  };

  return (
    <Form validateTrigger="onSubmit" onFinish={submitHander} layout="vertical">
      <Row wrap gutter={20} align="bottom">
        <Col md={{ span: 6 }}>
          <EventsFilterSelect
            values={years.map(year => '' + year)}
            selected={'' + selectedYear}
            onChange={year => yearChangeHandler(+year)}
            name="year"
            label="Year"
            placeholder="Select a year"
          />
        </Col>
        <Col md={{ span: 6 }}>
          <EventsFilterSelect
            values={months.map(month => ({
              value: '' + month,
              label: formatMonth(month),
            }))}
            selected={'' + selectedMonth}
            onChange={month => monthChangeHandler(+month)}
            name="month"
            label="Month"
            placeholder="Select a month"
          />
        </Col>
        <Col md={{ span: 4 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
