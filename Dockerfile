# Start with a base image that has Java installed
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the executable JAR file into the container
# The name "SmartContactManager-0.0.1-SNAPSHOT.jar" must match the name of the file you built
COPY target/SmartContactManager-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that your Spring Boot application listens on
# By default, this is 8080
EXPOSE 8080

# The command to run your application when the container starts
CMD ["java", "-jar", "app.jar"]