/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const locateGenerator = (generator: any, env: any, options: any): any => {
  let existingGenerator;
  try {
    existingGenerator = generator;
    if (!existingGenerator) {
      existingGenerator = env.requireNamespace(options.namespace).generator;
    }
  } catch (error) {
    const split = options.namespace.split(':', 2);
    existingGenerator = split.length === 1 ? split[0] : split[1];
  }
  return existingGenerator;
};

export default locateGenerator;
