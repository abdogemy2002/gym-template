// src/components/MembershipPlans.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MembershipPlans.css'; // Ensure this CSS file is correctly styled

const MembershipPlans = () => {
  return (
    <div className="membership-plans-page">
      <section className="plans-header">
        <h1>Choose Your Membership Plan</h1>
        <p>We have a plan to fit every lifestyle. Select the one that suits you best!</p>
      </section>

      <section className="plans-section">
        <div className="plans-row">
          {/* Basic Plan */}
          <div className="plan-card basic-plan">
            <h3>Basic Plan</h3>
            <p>$30/month</p>
            <ul>
              <li>Access to gym equipment</li>
              <li>1 group class per week</li>
              <li>Locker access</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">
              Sign Up Now
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="plan-card standard-plan">
            <h3>Standard Plan</h3>
            <p>$50/month</p>
            <ul>
              <li>Access to gym equipment</li>
              <li>Unlimited group classes</li>
              <li>Sauna access</li>
              <li>Locker access</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">
              Sign Up Now
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="plan-card premium-plan">
            <h3>Premium Plan</h3>
            <p>$80/month</p>
            <ul>
              <li>All features of the Standard Plan</li>
              <li>Personal training sessions</li>
              <li>Diet consultation</li>
              <li>Priority booking for classes</li>
            </ul>
            <Link to="/signup" className="btn btn-primary">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPlans;
