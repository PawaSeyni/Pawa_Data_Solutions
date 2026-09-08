// The people who actually do the work. Sprint 2 deliverable.
//
// Two entries. This was one for a while, and the components were built to lay
// out for whatever length the array happens to be — so adding the second
// principal was a data change and a layout rule, not a rewrite. The guardrail
// that mattered then still holds now: nobody is listed who does not actually do
// the work, and no bench is implied that does not exist.
//
// `credentials` are the two or three buyer-relevant lines the homepage card
// shows. They are deliberately about what the person has delivered, not who they
// are — biography stays on the About page, subordinate to the expertise.

export const TEAM = [
  {
    id: 'papa-nguer',
    name: 'Papa S. Nguer',
    roleKey: 'aboutRole',
    photo: '/papa-nguer.jpg',
    photoWebp: '/papa-nguer.webp',
    credentialKeys: ['teamPapaCred1', 'teamPapaCred2', 'teamPapaCred3'],
    linkedin: 'https://www.linkedin.com/in/papa-nguer-14ba6240',
    profile: 'https://papanguer.com/',
  },
  {
    id: 'jason-vo',
    name: 'Jason Thien Vo',
    roleKey: 'jasonRole',
    photo: '/jason-vo.jpg',
    photoWebp: '/jason-vo.webp',
    credentialKeys: ['teamJasonCred1', 'teamJasonCred2', 'teamJasonCred3'],
    linkedin: 'https://www.linkedin.com/in/jasonthienvo',
    profile: null,
  },
];

export const teamById = (id) => TEAM.find((m) => m.id === id);
