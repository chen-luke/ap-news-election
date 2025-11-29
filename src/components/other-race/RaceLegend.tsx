import styled from 'styled-components';

const PartyLegends = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 600px) {
    font-size: 11px;
    gap: 0.5rem;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const Legend = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const LeadingIndicator = (props: {
  color: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      viewBox='0 0 32 32'
      width={props.width ? props.width : '16px'}
      height={props.height ? props.height : '16px'}
    >
      {' '}
      <path fill={props.color} d='M0 0H32V32H0V0Z'></path>
      <path
        fill='white'
        d='M21.8041 12.0659L15.4647 21.4727C15.419 21.5766 15.3448 21.6656 15.2504 21.7296L14.9909 21.8972C14.9266 21.9394 14.8532 21.9662 14.7766 21.9754C14.6547 22.0082 14.5262 22.0082 14.4044 21.9754C14.14 21.9829 13.8798 21.9087 13.6599 21.7632C13.6043 21.6986 13.5397 21.6421 13.4681 21.5956L10.3774 18.7467C10.1356 18.5042 10 18.1771 10 17.8362C10 17.4954 10.1356 17.1682 10.3774 16.9257C10.6299 16.6834 10.9677 16.5479 11.3193 16.5479C11.6708 16.5479 12.0086 16.6834 12.2611 16.9257L14.0998 18.6685L19.5481 10.6024C19.7419 10.3085 20.0451 10.1025 20.3917 10.0293C20.7382 9.95603 21.1 10.0215 21.398 10.2113C21.6891 10.413 21.8927 10.716 21.968 11.0598C22.0433 11.4036 21.9847 11.7629 21.8041 12.0659Z'
      ></path>
    </svg>
  );
};

export default function RaceLegend() {
  return (
    <PartyLegends>
      <Legend>
        <LeadingIndicator color={'#0376c9ff'} />
        DEMOCRAT
      </Legend>
      <Legend>
        {' '}
        <LeadingIndicator color={'#16a5a3ff'} />
        YES
      </Legend>
      <Legend>
        {' '}
        <LeadingIndicator color={'#e06016ff'} />
        NO
      </Legend>
      <Legend>
        {' '}
        <LeadingIndicator color={'#f3bb2dff'} />
        OTHER
      </Legend>
      <Legend>
        {' '}
        <LeadingIndicator color={'#9d42beff'} />
        RUNOFF
      </Legend>
    </PartyLegends>
  );
}

export { LeadingIndicator };
