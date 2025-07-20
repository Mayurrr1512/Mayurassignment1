// Staff dataset
const dataSet = [
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
  [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
  [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ]
  // You can copy more entries if needed from the file
];

let sortDirection = {
  name: true,
  salary: true
};

function renderTable(data) {
  const tbody = document.querySelector("#staff-table tbody");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function sortTable(type) {
  let sorted = [...dataSet];
  if (type === "name") {
    sorted.sort((a, b) => {
      return sortDirection.name
        ? a[0].localeCompare(b[0])
        : b[0].localeCompare(a[0]);
    });
    sortDirection.name = !sortDirection.name;
  } else if (type === "salary") {
    sorted.sort((a, b) => {
      const salaryA = parseFloat(a[5].replace(/[$,]/g, ""));
      const salaryB = parseFloat(b[5].replace(/[$,]/g, ""));
      return sortDirection.salary ? salaryA - salaryB : salaryB - salaryA;
    });
    sortDirection.salary = !sortDirection.salary;
  }

  renderTable(sorted);
}

window.onload = () => {
  renderTable(dataSet);
  const year = new Date().getFullYear();
  document.getElementById("footer-text").innerHTML = `© ${year} Mayur Harshadbhai Patel`;
};
