import personalData from '../PersonalHomepage/personalData.json';

export const usePersonalData = () => {
  const {
    name,
    description,
    email,
    github,
    facebook,
    linkedin,
    instagram,
    contactInvitation,
  } = personalData;

  return { name, description, email, github, facebook, linkedin, instagram, contactInvitation };
};
