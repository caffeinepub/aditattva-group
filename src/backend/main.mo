import List "mo:core/List";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Time "mo:core/Time";

actor {
  // Contact Submission Type & Module
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  // Add Contact Submission
  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      subject;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  // Get All Contact Submissions (sorted by newest first)
  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray().sort();
  };
};
