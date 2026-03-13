def login(username, password):
    correct_username = "admin"
    correct_password = "1234"

    if username == correct_username and password == correct_password:
        print("Login successful")
    else:
        print("Invalid username or password")

# Example usage
user = input("Enter username: ")
pwd = input("Enter password: ")
login(user, pwd)