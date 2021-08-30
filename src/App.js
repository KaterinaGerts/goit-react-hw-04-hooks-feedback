
import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Container from 'components/Container/Container';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = option => {  
    this.setState(state => {
      return { [option]: state[option] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;   
    const total = this.countTotalFeedback();
    const percentage = Math.round((good / total) * 100);

    if (isNaN(percentage)) return 0;
    else {
      return Math.round((good / total) * 100);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = this.countTotalFeedback();
    const persentage = this.countPositiveFeedbackPercentage();
  return (
    <Container>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>        
          <Section title="Statistics">
          {totalSum === 0 ? (
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
}

export default App;
