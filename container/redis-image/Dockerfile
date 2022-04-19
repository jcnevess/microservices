# Get base image
FROM alpine

# Install dependencies on base image
RUN apk add --update gcc
RUN apk add --update redis

# Run actions on startup
CMD ["redis-server"]