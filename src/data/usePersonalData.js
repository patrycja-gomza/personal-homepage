import personalData from './personalData.json';

export const usePersonalData = () => {
  const email = personalData.email;
  const github = personalData.github;
  const facebook = personalData.facebook;
  const linkedin = personalData.linkedin;
  const instagram = personalData.instagram;
  const contactInvitation = personalData.contactInvitation;

  return { email, github, facebook, linkedin, instagram, contactInvitation };
};