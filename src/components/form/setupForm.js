const inputSections = () => [
    {
      key: "email-section",/* input-section-1 */
      className: `input-section email-section ${isEmailSectionFolded ? "fold-up" : ""}`,
      input: {
        type: "text",
        placeholder: "הכנס את שמך",
        className: "name-input",
        handleInputChange: handleNameChange,
      },
      button: {
        text: "המשך",
        inputValue: name,
        onClick: () => setIsEmailSectionFolded(true),
      },
    },
    {
      key: "password-section", /* input-section-2 */
      className: `input-section password-section folded ${isPasswordSectionFolder ? "fold-up" : ""}`,
      input: {
        type: "password",
        placeholder: "ENTER YOUR PASSWORD HERE",
        className: "password",
      },
      button: {
        text: "hello",
        onClick: () => setIsPasswordSectionFolder(true),
      },
    },
    {
      key: "repeat-password-section",/* input-section-3 */ 
      className: "input-section repeat-password-section folded",
      input: {
        type: "password",
        placeholder: "REPEAT YOUR PASSWORD HERE",
        className: "repeat-password",
      },
      button: {
        text: "hhhhh",
      },
    },
  ];
  