import React, { useEffect, useRef, useState } from 'react';
import { CourseDto } from '../../types/course';
import { apiClient } from '../../utils/apiClient';
import { Slide, SlideshowContainer, SlideshowDot, SlideshowDots, SlideshowSlider, SlideTitle } from './SlideshowComponents';

const mockCourses:CourseDto[] = [];
const delay = 10000;

const Slideshow = () => {

  useEffect(() => {
		getHomeCourses();
	}, []);

  const [courses, setCourses] = useState<CourseDto[]>(mockCourses)
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>(null);
  const [isHovered, setHovered] = useState<boolean>(false);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === courses.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const getHomeCourses = async () => {
    try {
			const res = await apiClient.get("course/home", {
			});
			const courses = res.data;
			
			setCourses(courses);
		} catch (e) {
			console.log(e);
		}
  }

  useEffect(() => {
    console.log("isHovered=",isHovered)
    if(isHovered){
      resetTimeout();
    }else{
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === courses.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }
  },[isHovered]);

  
  return (
    <>
      <SlideshowContainer>
        <SlideshowSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {courses.map((course, index) => (
            <Slide
              key={index}
              style={{ backgroundImage: `url(${course.coverImage})` }}
            >
              <SlideTitle
                href={'course/'+course.id}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {course.title}
                
                {isHovered?<><br/><br/>{course.description}</>:""}
              </SlideTitle>
            </Slide>
          ))}
        </SlideshowSlider>

        <SlideshowDots>
          {courses.map((_, idx) => (
            <SlideshowDot
              key={idx}
              active={index === idx}
              onClick={() => {
                setIndex(idx);
              }}
            ></SlideshowDot>
          ))}
        </SlideshowDots>
      </SlideshowContainer>
    </>
    
  );
};

export default Slideshow;