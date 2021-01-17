# # Pull down an image from Docker Hub that includes only the ASP.NET core runtime:
# # https://hub.docker.com/_/microsoft-dotnet-core-aspnet/
# # We don't need the SDK anymore, so this will produce a lighter-weight image
# # that can still run the app.
# FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base

# # Expose port 80 to your local machine so you can access the app.
# WORKDIR /app
# EXPOSE 80


# Pull down an image from Docker Hub that includes the .NET core SDK: 
# https://hub.docker.com/_/microsoft-dotnet-core-sdk
# This is so we have all the tools necessary to compile the app.
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build


# Install npm
# RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
# RUN apt-get install --yes nodejs


# public dotnet solution
WORKDIR /src
COPY . .

RUN dotnet publish --output /app/publish



# Copy the published app to this new runtime-only container.
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim

# Expose port 21021 to your local machine so you can access the app.
EXPOSE 21021

# Copy the published app to this new runtime-only container.
COPY --from=build /app/publish .

# To run the app, run , which we just copied over.
ENTRYPOINT ["dotnet", "SE347.L11_HelloWork.Web.Host.dll"]
