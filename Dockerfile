# react-playground/Dockerfile
FROM node:23-bullseye-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends git && \
    rm -rf /var/lib/apt/lists/* && \
    ln -snf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "Asia/Tokyo" > /etc/timezone

# 作業ユーザーを node (UID 1000) に
USER node
WORKDIR /workspace