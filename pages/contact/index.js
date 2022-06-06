import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonSendMessage from "../../components/ButtonSendMessage";
import Link from "next/link";

const Index = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredMessageIsValid = enteredMessage.trim() !== "";
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const messageInputBlurHandler = (event) => {
    setEnteredMessageTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMessageTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredMessageTouched(false);
  };

  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <main className='mt-[104px]  bg-secondary_grey_bg px-8 sm:mt-[144px] sm:px-10 xl:mx-auto xl:max-w-[1440px] xl:px-[165px]'>
        <div className='sm:pt-[46px]'>
          <hr className='mb-6 sm:mb-8 xl:mb-12' />
          <div className='xl:flex'>
            <div className='xl:inline-block'>
              <h2 className='mb-6 xl:mr-[125px] xl:w-[350px]'>Get in Touch</h2>
            </div>
            <div>
              <p className='mb-6 text-[15px]'>
                I'd love to hear about what you're working on and how I could
                help. I'm currently looking for a new role and am open to a wide
                range of opportunities. My preference would be to find a
                position in a company in London. But I'm also happy to hear
                about opportunites that don't fit that description. I'm a
                hard-working and positive person who will always approach each
                task with a sense of purpose and attention to detail. Please do
                feel free to check out my online profiles below and get in touch
                using the form.
              </p>
              <div className='mb-8 flex flex-row items-center space-x-4 fill-primary_darkblue xl:mb-12'>
                <Link href='https://github.com/peternguyen777'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='24'
                    className='cursor-pointer hover:fill-primary_cyan'
                  >
                    <path d='M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z' />
                  </svg>
                </Link>
                <Link href='https://twitter.com/ptr_nguyen'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='20'
                    className='cursor-pointer hover:fill-primary_cyan'
                  >
                    <path d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z' />
                  </svg>
                </Link>
                <Link href='https://au.linkedin.com/in/ptrnguyen'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    className='cursor-pointer hover:fill-primary_cyan'
                  >
                    <path d='M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='mb-6 sm:mb-8' />
        <div className='xl:flex'>
          <div className='xl:inline-block'>
            <h2 className='mb-6 sm:mb-8 xl:mr-[125px] xl:w-[350px]'>
              Contact Me
            </h2>
          </div>
          <form
            // action='mailto:peter.quang.nguyen@gmail.com'
            // method='POST'
            encType='text/plain'
            className='w-full'
            noValidate
            onSubmit={formSubmissionHandler}
          >
            <label
              htmlFor='name'
              className='mb-2 font-publicsans text-[13px] font-bold leading-[30px] text-primary_darkblue'
            >
              Name
            </label>
            <br />
            <div className='relative mb-6'>
              <input
                type='text'
                id='name'
                placeholder='Jane Appleseed'
                required
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
                className={`h-[48px] w-full bg-primary_darkblue/10 indent-4 text-[13px] leading-[30px] text-primary_darkblue focus:outline-none  ${
                  nameInputIsInvalid
                    ? `border border-secondary_red`
                    : `focus:border focus:border-primary_cyan`
                }`}
              />
              {nameInputIsInvalid && (
                <p className='absolute translate-y-1 font-publicsans text-[10px] font-bold italic leading-[12px] text-secondary_red'>
                  This field is required
                </p>
              )}
            </div>
            <label
              htmlFor='email'
              className='mb-2 font-publicsans text-[13px] font-bold leading-[30px] text-primary_darkblue'
            >
              Email Address
            </label>
            <br />
            <div className='relative mb-6'>
              <input
                type='email'
                id='email'
                placeholder='email@example.com'
                required
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
                className={`h-[48px] w-full bg-primary_darkblue/10 indent-4 text-[13px] leading-[30px] text-primary_darkblue focus:outline-none ${
                  emailInputIsInvalid
                    ? `border border-secondary_red`
                    : `focus:border focus:border-primary_cyan`
                }`}
              />
              {emailInputIsInvalid && (
                <p className='absolute translate-y-1 font-publicsans text-[10px] font-bold italic leading-[12px] text-secondary_red'>
                  This field is required
                </p>
              )}
            </div>
            <label
              htmlFor='message'
              className='mb-2 font-publicsans text-[13px] font-bold leading-[30px] text-primary_darkblue'
            >
              Message
            </label>
            <br />
            <div className='relative mb-6'>
              <textarea
                type='text'
                id='message'
                placeholder='How can I help?'
                rows='3'
                required
                onChange={messageInputChangeHandler}
                onBlur={messageInputBlurHandler}
                value={enteredMessage}
                className={`block h-[96px] w-full bg-primary_darkblue/10 pt-2 pl-4 text-[13px] leading-[30px] text-primary_darkblue focus:outline-none ${
                  messageInputIsInvalid
                    ? `border border-secondary_red`
                    : `focus:border focus:border-primary_cyan`
                }`}
              />
              {messageInputIsInvalid && (
                <p className='absolute translate-y-1 font-publicsans text-[10px] font-bold italic leading-[12px] text-secondary_red'>
                  This field is required
                </p>
              )}
            </div>
            <ButtonSendMessage>SEND MESSAGE</ButtonSendMessage>
            <div className='pt-20 sm:pt-24'></div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
