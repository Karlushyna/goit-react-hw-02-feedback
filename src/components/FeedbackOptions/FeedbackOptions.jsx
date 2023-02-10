import propTypes from "prop-types";

import styles from "./feedback-options.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option, index) => (
            <button
                className={styles.feedbackBtn}
                key={index}
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};