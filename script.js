// TODO: add code here
window.addEventListener('load', _ => {
    const container = document.getElementById('container');
    const header    = document.getElementById('astronauts');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response) => response.json().then((json) => {
        let html = '';
        astronauts.innerHTML = `Astronauts - ${json.length}`;
        json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
        for (astronaut of json) {
            html += `
<div class="astronaut">
<div class="bio">
    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    <ul>
        <li>Hours in space: ${astronaut.hoursInSpace}</li>
        <li${astronaut.active === true ? ' class="active"' : ''}>Active: ${astronaut.active}</li>
        <li>Skills: ${astronaut.skills.join(', ')}</li>
    </ul>
</div>
<img class="avatar" src="${astronaut.picture}">
</div>
`;
        }
        container.innerHTML = html;
    }));
});
