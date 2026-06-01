interface Profile {
    name: string;
    age: number;
    skills: string[];
}

async function fetchData<T>(url: string): Promise<T>{
    const resp=await fetch(url);
    return resp.json();
}

async function getProfile(){
    const profile = await fetchData<Profile>('https://jsonplaceholder.typicode.com/users/1');
    console.log(profile.name);
}
getProfile();