import People from "../components/People";

export default function PeoplePage(people) {
  return `
    <h1>The People Page</h1>
    ${People(people)}
    `;
}
