(function (Scratch) {
    'use strict';
    Scratch.translate.setup({
        zh: {
            'Project': '项目',
            'TotalUsedBlocks': '使用的块总数',
            'NumberOfBlockTypes': '块种类数',
            'NumberOfSegments': '段数',
            'NumberOfCostumes': '造型数',
            'NumberOfSounds': '声音数',
        }
    });
    let totalUsedBlocks, numberOfBlockTypes, numberOfSegments, numberOfCostumes, numberOfSounds;
    class Project {
        constructor(runtime) {
            this.runtime = runtime;
        }
        calculate(targets) {
            const blocksUsed = {}; // Record the number of block types
            let segmentCount = 0; // Record the number of segments
            let costumeCount = 0; // Record the number of costumes
            let soundCount = 0;   // Record the number of sounds

            for (let i = 0; i < targets.length; i++) {
                const target = targets[i];
                if (target.blocks) {
                    for (const blockId in target.blocks._blocks) {
                        const block = target.blocks._blocks[blockId];
                        const blockType = block.opcode.split('_')[0]; // Get the block type

                        if (!blocksUsed[blockType]) {
                            blocksUsed[blockType] = 1;
                        } else {
                            blocksUsed[blockType]++;
                        }

                        // Count the number of segments
                        if (block.topLevel && block.parent === null) {
                            segmentCount++;
                        }
                    }
                }

                // Count the number of costumes
                if (target.sprite.costumes) {
                    costumeCount += target.costumes.length;
                }

                // Count the number of sounds
                if (target.sprite.sounds) {
                    soundCount += target.sounds.length;
                }
            }

            totalUsedBlocks = targets.reduce((acc, target) => acc + Object.keys(target.blocks || {}).length, 0);
            numberOfBlockTypes = Object.keys(blocksUsed).length;
            numberOfSegments = segmentCount;
            numberOfCostumes = costumeCount;
            numberOfSounds = soundCount;
        }
        getInfo() {
            return {
                id: 'Project',
                name: Scratch.translate({ id: 'Project', default: 'Project' }),
                blocks: [
                    {
                        opcode: 'TotalUsedBlocks',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'TotalUsedBlocks', default: 'Total Used Blocks' })
                    },
                    {
                        opcode: 'NumberOfBlockTypes',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfBlockTypes', default: 'Number of Block Types' })
                    },
                    {
                        opcode: 'NumberOfSegments',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfSegments', default: 'Number of Segments' })
                    },
                    {
                        opcode: 'NumberOfCostumes',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfCostumes', default: 'Number of Costumes' })
                    },
                    {
                        opcode: 'NumberOfSounds',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfSounds', default: 'Number of Sounds' })
                    },
                ]
            };
        }
        TotalUsedBlocks() {
            console.log(this.runtime)
            this.calculate(this.runtime.targets);
            return totalUsedBlocks;
        }

        NumberOfBlockTypes() {
            this.calculate(this.runtime.targets);
            return numberOfBlockTypes;
        }

        NumberOfSegments() {
            this.calculate(this.runtime.targets);
            return numberOfSegments;
        }

        NumberOfCostumes() {
            this.calculate(this.runtime.targets);
            return numberOfCostumes;
        }

        NumberOfSounds() {
            this.calculate(this.runtime.targets);
            return numberOfSounds;
        }
    }

    Scratch.extensions.register(new Project());
})(Scratch);
