const classdata = [
    {
        name: "kuldeep",
        class: "10 th",
        marks: 89,
        address: "adarsh colony palwal"
    },
    {
        name: "shiv",
        class: "10 th",
        marks: 92,
        address: "shiv colony palwal"
    },
    {
        name: "rajiv",
        class: "10 th",
        marks: 55,
        address: "rajiv colony palwal"
    },
    {
        name: "krishna",
        class: "10 th",
        marks: 72,
        address: "krishna colony palwal"
    },
    {
        name: "sallagah",
        class: "10 th",
        marks: 69,
        address: "sallagarh colony palwal"
    }
];

function searchStudent() {
    let searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let result = classdata
        .filter(student =>
            student.name.toLowerCase().includes(searchValue)
        )
        .map(student =>
            `
            <div>
                <h3>${student.name}</h3>
                <p>Class: ${student.class}</p>
                <p>Marks: ${student.marks}</p>
                <p>Address: ${student.address}</p>
                <hr>
            </div>
            `
        );

    document.getElementById("result").innerHTML =
        result.length > 0
            ? result.join("")
            : "<h3>No Student Found</h3>";
}

