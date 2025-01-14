'use server';
export const postForm = async (event) => {
  event.preventDefault();
  console.log({event})
  return Promise.resolve({ data: event });
}
