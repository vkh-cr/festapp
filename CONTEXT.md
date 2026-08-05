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

**Account Email**:
The canonical e-mail identity used across the application for sign-in, account
lookup, display, and relationships. It may contain a deterministic `+N` alias
when multiple people share one delivery mailbox.
_Avoid_: Delivery override, order contact email

**Delivery Override**:
An optional, non-unique mailbox used only for outbound account e-mail. When it
is absent, account e-mail is sent to the Account Email. It never identifies an
account elsewhere in the application.
_Avoid_: Account email, Auth email, order contact email

**Order Contact Email**:
The historical mailbox captured on an order. It belongs to the Registration
Snapshot and is used for order communication, not as the current account-mail
source of truth.
_Avoid_: Delivery email, current user email
