import { FaCircleCheck } from "react-icons/fa6";
const PWDRequisite = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) => {
  return (
    <div className="message mt-3">
      <p className={pwdLengthFlag}>
        {" "}
        <FaCircleCheck className="mx-2" />
        Minimum 12 characters
      </p>
      <p className={numberFlag}>
        {" "}
        <FaCircleCheck className="mx-2" />
        Include at least one number
      </p>
      <p className={capsLetterFlag}>
        {" "}
        <FaCircleCheck className="mx-2" />
        Use a mix of uppercase and lowercase letters
      </p>

      <p className={specialCharFlag}>
        {" "}
        <FaCircleCheck className="mx-2" /> Add at least one special character
        (!@#$%)
      </p>
    </div>
  );
};

export default PWDRequisite;
