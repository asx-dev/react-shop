import Button from "react-bootstrap/Button";
const CallToAction = () => {
  return (
    <div className="call-to-action-container shadow d-flex flex-column align-items-center text-center align-items-md-start justify-content-center text-light mb-3">
      <h3>Get help exactly when you need it!</h3>
      <p>From shipping to returns, find answers to all your questions.</p>
      <Button variant="primary">Start here</Button>
    </div>
  );
};

export default CallToAction;
