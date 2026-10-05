import { useState } from 'react';

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 1,
      name: 'React Fundamentals',
      progress: 75,
      instructor: 'Sarah Wilson',
      nextLesson: 'Components & Props',
      color: 'blue',
    },
    {
      id: 2,
      name: 'JavaScript Advanced',
      progress: 45,
      instructor: 'Mike Johnson',
      nextLesson: 'Async/Await',
      color: 'purple',
    },
    {
      id: 3,
      name: 'UI/UX Design',
      progress: 90,
      instructor: 'Emily Chen',
      nextLesson: 'Color Theory',
      color: 'pink',
    },
  ];

  const assignments = [
    {
      id: 1,
      title: 'Build a Todo App',
      course: 'React Fundamentals',
      dueDate: '2024-03-20',
      status: 'pending',
    },
    {
      id: 2,
      title: 'API Integration',
      course: 'JavaScript Advanced',
      dueDate: '2024-03-18',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Design System',
      course: 'UI/UX Design',
      dueDate: '2024-03-25',
      status: 'in-progress',
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Course Available',
      message: 'Check out our new TypeScript course!',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Maintenance Notice',
      message: 'Platform updates scheduled for tonight',
      time: '5 hours ago',
    },
  ];

  const stats = [
    {
      label: 'Average Grade',
      value: '88%',
      icon: '📊',
    },
    {
      label: 'Courses',
      value: '3',
      icon: '📚',
    },
    {
      label: 'Study Hours',
      value: '45h',
      icon: '⏰',
    },
    {
      label: 'Assignments',
      value: '12',
      icon: '✍️',
    },
  ];

  const progressColors = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 py-5">

      <div className="max-w-[1200px] mx-auto">

     
        <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-base font-bold text-gray-800">
                Welcome back, Student!
              </h1>

              <p className="text-xs text-gray-500 mt-0.5">
                Here's what's happening with your courses today.
              </p>
            </div>

            <div className="flex items-center gap-4">

           
              <div className="relative">
                <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span>

                <button className="text-lg">
                  🔔
                </button>
              </div>

           
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
                S
              </div>

            </div>
          </div>
        </div>


    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm"
            >

              <div className="flex items-center">

                <div className="text-lg mr-3">
                  {stat.icon}
                </div>

                <div>
                  <p className="text-[11px] text-gray-500">
                    {stat.label}
                  </p>

                  <p className="text-lg font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>


    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

         
          <div className="lg:col-span-2">

            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Course Progress
              </h2>

              <div className="space-y-2">

                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#f8fafc] rounded-md px-3 py-3"
                  >

                  
                    <div className="flex justify-between items-center mb-2">

                      <h3 className="text-xs font-medium text-gray-700">
                        {course.name}
                      </h3>

                      <span className="text-[10px] text-gray-500">
                        {course.progress}%
                      </span>

                    </div>


                  
                    <div className="w-full bg-gray-200 rounded-full h-1.5">

                      <div
                        className={`h-1.5 rounded-full ${progressColors[course.color]}`}
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>

                    </div>


                    <div className="flex justify-between mt-2">

                      <span className="text-[10px] text-gray-500">
                        Next: {course.nextLesson}
                      </span>

                      <span className="text-[10px] text-gray-500">
                        {course.instructor}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


        
          <div className="space-y-4">


            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Upcoming Assignments
              </h2>

              <div className="space-y-3">

                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex justify-between items-start"
                  >

                    <div className="min-w-0">

                      <h3 className="text-xs font-medium text-gray-700">
                        {assignment.title}
                      </h3>

                      <p className="text-[10px] text-gray-500">
                        {assignment.course}
                      </p>

                    </div>


                    <div className="text-right ml-2">

                      <span
                        className={`
                          inline-block
                          px-2
                          py-0.5
                          rounded-full
                          text-[9px]
                          font-medium
                          ${
                            assignment.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : assignment.status === 'in-progress'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }
                        `}
                      >
                        {assignment.status}
                      </span>

                      <p className="text-[9px] text-gray-400 mt-1">
                        Due {assignment.dueDate}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>


           
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Announcements
              </h2>

              <div className="space-y-3">

                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="border-l-2 border-blue-500 pl-2"
                  >

                    <h3 className="text-xs font-medium text-gray-700">
                      {announcement.title}
                    </h3>

                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {announcement.message}
                    </p>

                    <p className="text-[9px] text-gray-400 mt-0.5">
                      {announcement.time}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;