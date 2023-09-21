// src/App.js
import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import './Styles.css';

const MainHome = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Simplify Group Expenses with Split App</h1>
        <h2>Your Go-To Solution for Fair and Easy Expense Splitting</h2>
      </header>

      <section className="intro">
        <div className="intro-container">
          <h3>Welcome to the Split App</h3>
          <p>The ultimate tool for hassle-free expense splitting among friends! Say goodbye to the headache of manually calculating who owes what when you go out with your buddies. Our app is designed to make group expenses a breeze.</p>
        </div>
      </section>

      <section className="how-it-works">
        <div className="how-it-works-container">
          <h3>How it Works</h3>
          <div className="how-it-works-steps">
            <div className="step">
              <h4>Create a Group</h4>
              <p>Start by creating a group for your outing, whether it's a dinner, road trip, or a weekend getaway.</p>
            </div>
            <div className="step">
              <h4>Add Expenses</h4>
              <p>Add expenses as they occur – from meals and drinks to transportation and accommodation.</p>
            </div>
            <div className="step">
              <h4>Split the Bill</h4>
              <p>Our app will intelligently split the expenses among your group members, ensuring everyone pays their fair share.</p>
            </div>
            <div className="step">
              <h4>Settle Up</h4>
              <p>At the end of your outing, settle up with your friends effortlessly. No more awkward discussions about who owes what.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-container">
          <h3>Why Choose Split App</h3>
          <div className="benefits">
            <div className="benefit">
              <h4>Effortless Expense Sharing</h4>
              <p>Say goodbye to the hassle of manually splitting bills. Our app streamlines the process, so you can focus on enjoying your time with friends.</p>
            </div>
            <div className="benefit">
              <h4>Transparency and Fairness</h4>
              <p>Our app calculates everyone's share precisely, ensuring fairness in expense sharing among your group.</p>
            </div>
            <div className="benefit">
              <h4>Real-Time Updates</h4>
              <p>Get instant updates on who has paid what and who owes money, so you're always in the loop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="key-features">
        <div className="key-features-container">
          <h3>Key Features</h3>
          <div className="features">
            <div className="feature">
              <h4>Create Groups</h4>
              <p>Organize your friends into expense-sharing groups for any occasion or outing.</p>
            </div>
            <div className="feature">
              <h4>Add Expenses Easily</h4>
              <p>Add expenses on the go, right from your phone, and categorize them effortlessly.</p>
            </div>
            <div className="feature">
              <h4>Automatic Expense Splitting</h4>
              <p>Let our app do the math for you. It divides expenses equally or as per your preference.</p>
            </div>
            <div className="feature">
              <h4>Track Debts and Payments</h4>
              <p>Stay on top of who owes money and who has settled their debts within the group.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="get-started">
        <div className="get-started-container">
          <h3>Get Started Today</h3>
          <p>Download Split App now and start enjoying stress-free group outings. Say hello to financial fairness and goodbye to awkward money discussions!</p>
        </div>
      </section>

      <section className="notifications-reminders">
        <div className="notifications-reminders-container">
          <h3>Notifications and Reminders</h3>
          <p>Automated reminders for unpaid debts or upcoming expenses.</p>
          <p>Push notifications for activity within shared groups.</p>
        </div>
      </section>

      <section className="debt-tracking">
        <div className="debt-tracking-container">
          <h3>Debt Tracking</h3>
          <p>Keep track of how much money you owe and are owed within each group.</p>
          <p>Clear visualization of who owes money and who has settled debts.</p>
        </div>
      </section>

      {/* Add more sections as needed for additional content */}
    </div>
  );
};

export default MainHome;