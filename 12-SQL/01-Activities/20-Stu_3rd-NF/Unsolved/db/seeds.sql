-- Inserting data into businesses
INSERT INTO businesses (business_id, business_name) VALUES
(1, 'Prosser Lankovitch Products'),
(2, 'Ripley Enterprises'),
(3, 'Gormenghast, Inc.'),
(4, 'Nullhammer Corporation');

INSERT INTO locations (location_id, location_name, location_manager) VALUES
(101, 'Annapolis, MD', 'Rita Ivanov'),
(102, 'Los Angeles, CA', 'Aaron Kamara'),
(103, 'Lincoln, NB', 'Farahd Mohamed'),
(104, 'Saskatchewan, CA', 'Amara Marquez');



SELECT * FROM businesses;
-- Query to retrieve student name, course name, and course instructor
SELECT students.student_name, courses.course_name, courses.course_instructor 
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.course_id;