// The people who actually do the work. Sprint 2 deliverable.
//
// One entry, because there is one person. The brief's §7 guardrail is explicit
// about not inflating team scale, and a boutique that lists an invented bench is
// doing precisely the "big-firm cosplay" §5 rules out. The components read this
// array and lay out for its length, so adding a second person is a data change
// and nothing else.
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
];

export const teamById = (id) => TEAM.find((m) => m.id === id);
