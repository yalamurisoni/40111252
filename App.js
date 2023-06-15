import React from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from "react-native";
  
const PostRequestExample = () => {
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
         
          companyName: "Train Central",
          ownerName: "Y.SoniPriya",
          rollNo: "40111252",
          ownerEmail: "soniyalamuri11@gmail.com",
          accessCode: "siuzyt"
      })
      
    };
  
    const postExample = async () => {
      console.log("test")
        try {
            await fetch(
                'http://104.211.219.98/train/register', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                          console.log("response : ", response)
                            Alert.alert("Post created at : ", 
                            data.createdAt);
                        });
                })
        }
        catch (error) {
            console.error(error);
            Alert.alert("Post created at : ", 
            error);
        }
    }
  
    return (
        <View style={styles.btn}>
            <Button mode="contained" onPress={postExample}
            title="REGISTER" >
                Click to make a Post request</Button>
        </View>
    )
  
}
  
export default PostRequestExample;
  
const styles = StyleSheet.create({
    btn: {
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    }
})