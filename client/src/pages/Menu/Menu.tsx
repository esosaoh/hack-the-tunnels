import { Central as Layout } from "@/layouts";
import { CabinetSection } from "./CabinetSection";
import "./Menu.style.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Layout title={"Main Menu"}>
      <br />
      <CabinetSection
        title="Personal Information"
        lineItems={[
          <Link to="/404">
            <b>Self Identification Survey</b>
          </Link>,
          <Link to="/404">Update addresses and phone numbers</Link>,
          <Link to="/404">View name change information</Link>,
          <Link to="/404">Personal Emergency Contact Information</Link>,
          <span>
            <b>Campus Card:</b> The CampusCard online services can now be
            accessed through the{" "}
            <a href="https://wcc.carleton.ca/student/welcome.php">
              CampusCard Web Center
            </a>
          </span>,
          <Link to="/404">
            MyCarletonOne Account information and Carleton Email address
          </Link>,
          <Link to="/404">Travel Registry</Link>,
          <Link to="/404">Manage Email Communications</Link>,
          <Link to="/404">Chosen Name</Link>,
          <Link to="/404">Pronouns</Link>,
          <Link to="/404">Submit Social Insurance Number (SIN)</Link>,
        ]}
      />
      <CabinetSection
        title="Student Records"
        lineItems={[
          <span>
            <b>Graduate Admissions:</b> Graduate Admissions and Graduate In-
            Program Revisions.
          </span>,
          <Link to="/404">
            <b>Admissions</b> Review admission application, View Holds and
            Conditions of Offer, Internal Application for Admission
          </Link>,
          <Link to="/404">
            <b>myGrades</b> Display grades
          </Link>,
          <Link to="/404">
            <b>myProgress (ACE: Academic Continuation Evaluation)</b>
          </Link>,
          <Link to="/404">
            <b>myExam Schedule</b>
          </Link>,
          <Link to="/404">
            <b>myTransferCredit (credit from previous studies)</b>
          </Link>,
        ]}
      />
      <CabinetSection
        title="Registration"
        lineItems={[
          <span>
            <b>Registration: </b>
            <Link to="/404">Getting Started</Link>,{" "}
            <Link to="/timetables/build">
              Build Your Timetable/Registration
            </Link>
            ,<Link to="/timetables">Student Timetables</Link>,
            <Link to="/404">Display Holds</Link>,
            <Link to="/404">Registration Override Requests</Link>
          </span>,
          <span>
            Other:
            <Link to="/404">Add/Drop Classes</Link>,
            <Link to="/404">French Placement Test</Link>,
            <Link to="/404">Purchase Books</Link>,
          </span>,
          <span>
            <Link to="/404">
              <b>Student Accounts: </b>
            </Link>
            ,<Link to="/404">Calculate Amount To Pay</Link>,
            <Link to="/404">International Currency Payment </Link>,
            <Link to="/404">Refund Request</Link>,
            <Link to="/404">Print tax receipts (T2202, RL-8)</Link>,
          </span>,
        ]}
      />
      <CabinetSection
        title="Academic Progress"
        lineItems={[
          <span>
            <b>myAudit:</b> View academic audit.
          </span>,
          <Link to="/404">
            <b>myProgress:</b> ACE (Academic Continuation Evaluation).
          </Link>,
        ]}
      />
      <CabinetSection
        title="Awards and Financial Assistance"
        lineItems={[
          <span>
            <b>Student Award Information:</b>
            Display all awards and/or funding (Student loans, bursaries,
            scholarships, graduate funding) and their status.
          </span>,
          <span>
            <Link to="/404">
              <b>Undergraduate Online Application Forms:</b>
            </Link>{" "}
            Apply for undergraduate bursaries/awards and Work Study programs.
            Check application status.
          </span>,
          <span>
            <Link to="/404">
              <b>Graduate Online Application Forms:</b>
            </Link>{" "}
            Apply for graduate bursaries/awards and other financial aid. Check
            application status,
          </span>,
          <span>
            <Link to="/404">
              <b>Thank You Messages:</b>
            </Link>{" "}
            Submit thank you messages for donor-funded awards.
          </span>,
        ]}
      />
    </Layout>
  );
}

export default Menu;
