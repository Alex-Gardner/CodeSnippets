//AJAX getting data 

$(function() {

	$.ajax({
		url: 'https://www.codeschool.com/users/1931327.json',
		dataType: 'jsonp',
		success: function(response){
			addCourses(response.courses.completed)
		}

	});

	function addCourses(courses){
		$badges = $('#badges');

		courses.forEach(function(course){

			$course = $('<div />', {
				'class': 'course'
			}).appendTo($badges);

			$('<h3 />', {
				text: course.title
			}).appendTo($course);

			$('<img />', {
				src: course.badge
			}).appendTo($course);

			$('<a />', {
				'class': 'btn btn-primary',
				'target': '_blank',
				href: course.url,
				text: 'See Course'
			}).appendTo($course);
		});
	}
});


// url: https://www.codeschool.com/users/1931327.json
