import emailjs from "@emailjs/browser";
import { useRef } from "react";
import styled from "styled-components";
import New from "../../New";
import profimg from "../../../public/albert.jpg"

function Expert1() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vb6i7xf",
        "template_90dx8m7",
        form.current,
        "TGLWoH9yy2cw2MVmy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Expert1Container>
      <LeftSide>
        {/* Doctor Information Section */}
        <DoctorSection>
          <DoctorImage src={profimg} alt="Doctor" />
          <DoctorInfo>
            <h3>Dr. Albert Doe</h3>
            <p>Location: New York</p>
            <p>Contact: +1 123-456-7890</p>
            <p>Expertise: Cardiology</p>
          </DoctorInfo>
        </DoctorSection>
        {/* Doctor Description Section */}
        <DoctorDescription>
          <h3>About Dr. Albert Doe</h3>
          <p>
            Dr. Albert Doe is a renowned cardiologist with years of experience in
            treating heart-related conditions. He is committed to providing the
            best care to his patients and is known for his expertise in the
            field.
          </p>
        </DoctorDescription>
      </LeftSide>
      <CenteredContent>
        <New />
        <StyledExpert1Form>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name:</label>
              <input type="text" name="user_name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="user_email" />
            </div>
            {/* <div>
              <label>Message:</label>
              <textarea name="message" />
            </div> */}
            <input className="submit" type="submit" value="Send" />
          </form>
        </StyledExpert1Form>
      </CenteredContent>
    </Expert1Container>
  );
}

export default Expert1;
const Expert1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
// background-color: #b0e0e6;
const LeftSide = styled.div`
  /* Add styles for the left side content here */
  flex: 1; /* Allow the left side to grow to take up available space */
  padding: 50px; /* Adjust the padding as needed */
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  background-color: #006666;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: white;
`;

const DoctorSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DoctorImage = styled.img`
  width: 100px; /* Adjust the image size as needed */
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const DoctorInfo = styled.div``;

const DoctorDescription = styled.div`
  margin-top: 20px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 20px;
`;

const StyledExpert1Form = styled.div`
  width: 500px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #b0e0e6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;

  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #00ce9e;
  }

  form {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
      margin-top: 1rem;
      font-weight: bold;
      color: #006666;
    }

    input,
    textarea {
      width: 95%;
      padding: 10px;
      margin-top: 5px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      color: #333;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: #00ce9e;
      }
    }

    .submit {
      width: 100%;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    input[type="submit"] {
      margin-top: 20px;
      padding: 12px;
      cursor: pointer;
      background-color: #006666;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #007d66;
      }
    }
  }
`;
// export default Expert1
// background-color: #00ce9e;