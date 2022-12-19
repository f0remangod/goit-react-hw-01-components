import PropTypes from 'prop-types';
import {
  Title,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsValue,
  Section,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id} prop={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsValue>{percentage}%</StatsValue>
            </StatsItem>
          );
        })}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};