type userLocation = {
    country: string,
    city: string
}
interface UserProfile {
    data:{
        profileImageURL: string,
        description: string,
        username: string,
        age: number,
        location: userLocation;
    }

}