FROM node:18-alpine as builder
#FROM quay.io/keycloak/keycloak:22.0.5 as builder

#Work dicectory
WORKDIR /src
#
## Enable health and metrics support
#ENV KC_HEALTH_ENABLED=true
#ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=postgres

##make working derictory
#WORKDIR /opt/keycloak
#
## for demonstration purposes only, please make sure to use proper certificates in production instead
#RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
#
##custom theme keycloak
#
#RUN /opt/keycloak/bin/kc.sh build
#
#FROM quay.io/keycloak/keycloak:23.0.5 as production
#
#COPY --from=builder /opt/keycloak/ /opt/keycloak/

# Copying file into APP directory of docker
COPY ./package.json ./yarn.lock ./src/

# Copy current directory to APP folder
COPY . /src/

EXPOSE 3000
CMD ["yarn", "start:dev"]
# change these values to point to a running postgres instance
#ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]