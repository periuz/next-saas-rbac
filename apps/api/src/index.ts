import { defineAbilityFor } from '@saas/auth';

const ability = defineAbilityFor({
    role: 'MEMBER'
});

const userCanInviteSomeoneElse = ability.can('invite', 'User');
const userCanDeleteSomeone = ability.can('delete', 'User');

const userCannotInviteSomeoneElse = ability.cannot('invite', 'User');
const userCannotDeleteSomeone = ability.cannot('delete', 'User');

console.log(`User can invite someone else: ${userCanInviteSomeoneElse}`);
console.log(`User can delete someone: ${userCanDeleteSomeone}`);
console.log(`User cannot invite someone else: ${userCannotInviteSomeoneElse}`);
console.log(`User cannot delete someone: ${userCannotDeleteSomeone}`);