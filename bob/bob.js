export const hey = message => {
  message = message.trim();

  const silence = message === "";

  const yelling =
    message === message.toUpperCase() &&
    message.match(/[A-Z]/) &&
    message[message.length - 1] != "?";

  const yellingQuestion =
    message[message.length - 1] === "?" &&
    message === message.toUpperCase() &&
    message.match(/[A-Z]/);

  const question = message[message.length - 1] === "?";

  if (silence) {
    return "Fine. Be that way!";
  }

  if (yelling) {
    return "Whoa, chill out!";
  }

  if (yellingQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (question) {
    return "Sure.";
  }
  return "Whatever.";
};
