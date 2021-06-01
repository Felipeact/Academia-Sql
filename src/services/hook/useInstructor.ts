import { useQuery } from "react-query";
import { api } from '../api'

type Instructor = {
  id: string,
  avatar_url: string,
  name: string,
  birth: string,
  gender: string,
  services: string, 
  total_students: number
  createdAt: string,
}

type  GetInstructorResponse = {
  totalCount: number;
  instructors: Instructor[];
}

export async function deleteInstructor( data: string ) {
  await api.delete('instructors', {data})
}

export function useDeleteInstructor(data: string){

  return useQuery(['instructors', data], () => deleteInstructor(data), {
    staleTime: 60 * 60 * 60, 
  })
}


export async function getInstructor(page: number): Promise<GetInstructorResponse> {
  const { data } = await api.get('/instructors', {
    params: {
      page,
    }
  })


  const totalCount = Number(data.pagination.total)
  const instructors  = data.instructors.map((instructor: Instructor) => {
    return {
      id : instructor.id,
      name: instructor.name,
      birth: instructor.birth,
      gender: instructor.gender,
      services: instructor.services,
      total_students: instructor.total_students,
      createdAt: new Date(instructor.createdAt).toLocaleDateString('en-CA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    instructors, 
    totalCount
  }
}

export function useInstructor(page: number){

  return useQuery(['instructors', page], () => getInstructor(page), {
    staleTime: 60 * 60 * 60, 
  })
}

