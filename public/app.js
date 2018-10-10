console.log('Hello World');

//Request
const zip = $('input').val();

$(`#userSubmit`).on('click', grabZip); 

function grabZip () {
	const zip = $('input').val();
	fetch('localhost:3000/api/rep-info', {
		method: 'POST',
		headers: {
			"content-type": "application/json; charset=utf-8"
		},
		body: zip
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));
}

// function grapZip (e) => {
// 	e.preventDefault();
// 	const input = $(`#userData`);
// 	const zip = $('input').val();
// 	$.ajax({
// 		method: 'GET',
// 		data: input,
// 		url: '../server.js',
// 		success: handleSuccess,
// 		error: handleError,
// 		complete: console.log('Completed!')
// 	})
// }
