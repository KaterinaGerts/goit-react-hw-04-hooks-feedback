import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Container from 'components/Container/Container';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((good / total) * 100);

    if (isNaN(percentage)) return 0;
    else {
      return Math.round((good / total) * 100);
    }
  };

  const totalSum = countTotalFeedback();
  const persentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalSum}
              persentage={persentage}
            />
          )}
        </Section>
      </div>
    </Container>
  );
}

export default App;

// class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   handleIncrement = option => {
//     this.setState(state => {
//       return { [option]: state[option] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     return totalFeedback;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = Math.round((good / total) * 100);

//     if (isNaN(percentage)) return 0;
//     else {
//       return Math.round((good / total) * 100);
//     }
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalSum = this.countTotalFeedback();
//     const persentage = this.countPositiveFeedbackPercentage();
//   return (
//     <Container>
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//           <Section title="Statistics">
//           {totalSum === 0 ? (
//             <Notification message="No feedback given"></Notification>
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalSum}
//               persentage={persentage}
//             />
//           )}
//         </Section>
//       </div>
//     </Container>
//   );
// }
// }

// export default App;
