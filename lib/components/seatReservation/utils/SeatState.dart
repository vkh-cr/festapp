/// current state of a seat
enum SeatState {
  /// some user selected this seat
  selected,

  /// current user selected this seat
  selected_by_me_focused,

  /// current user selected this seat
  selected_by_me,

  /// but it is available to be booked
  available,

  /// this seat is already sold to other user
  ordered,

  /// this seat is disabled to be booked for some reason
  black,

  /// empty area e.g. aisle, staircase etc
  empty,
}
