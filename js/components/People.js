import PersonTile from './PersonTile.js';

export default function People(people){
    return `
    <div class='people__container'>
    ${people.results
      .map((person) => {
        return `
      ${PersonTile(person)}
      `;
      })
      .join("")}
    </div>
    `;
}