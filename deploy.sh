#/bin/sh

IMAGE_NAME="necro-automobilia-service"

if [ -z "$DOCKER_SCOPE" ]; then
  DOCKER_SCOPE="linkedmink/" 
fi

if [ -z "$DOCKER_REGISTRY" ]; then
  DOCKER_REGISTRY="linkedmink.azurecr.io/" 
fi

npm run containerize

docker tag \
  "${DOCKER_SCOPE}${IMAGE_NAME}" \
  "${DOCKER_REGISTRY}${DOCKER_SCOPE}${IMAGE_NAME}"

docker push "${DOCKER_REGISTRY}${DOCKER_SCOPE}${IMAGE_NAME}"

kubectl set image \
  "deployment/${IMAGE_NAME}" \
  $IMAGE_NAME="${DOCKER_REGISTRY}${DOCKER_SCOPE}${IMAGE_NAME}"

kubectl set image \
  "deployment/${IMAGE_NAME}" \
  $IMAGE_NAME="${DOCKER_REGISTRY}${DOCKER_SCOPE}${IMAGE_NAME}:latest" \
  --record

kubectl rollout status "deployment/${IMAGE_NAME}"
