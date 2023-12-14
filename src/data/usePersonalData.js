import personalData from './personalData.json';

export const usePersonalData = () => {
  const name = personalData.name;
  const description = personalData.description;
  const email = personalData.email;
  const github = personalData.github;
  const facebook = personalData.facebook;
  const linkedin = personalData.linkedin;
  const instagram = personalData.instagram;
  const contactInvitation = personalData.contactInvitation;

  return { name, description, email, github, facebook, linkedin, instagram, contactInvitation };
};