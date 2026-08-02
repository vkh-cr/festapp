# Festapp

Festapp manages people who share one identity across an organization while
participating in multiple occasions with occasion-specific information.

## Language

**User Profile**:
The canonical basic identity shared by one user across all occasions, including
name, surname, e-mail, gender, phone, and birth date. It describes the person's
current profile rather than what they entered for a particular occasion.
_Avoid_: Occasion user, participant data

**Occasion Participation**:
One user's membership and information in a single occasion, including roles,
permissions, groups, answers, notes, and stay/services. It does not own the
person's current profile identity.
_Avoid_: User profile, global user data

**Registration Snapshot**:
The profile-shaped information captured when a user registered for an occasion.
It is historical evidence, not a second current profile and not an implicit
occasion override.
_Avoid_: User profile, occasion profile override
